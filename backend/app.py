from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from datetime import datetime, timezone, timedelta

app = Flask(__name__)
app.app_context().push()
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://susanzea:EW1922!postgres@localhost:5432/tristar_fitness"
db=SQLAlchemy(app)
migrate = Migrate(app, db)

###### models
class WorkoutType(db.Model):
    __tablename__ = "workout_type"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now(timezone.utc))
    #workout type can be assigned to many sessions
    workout_sessions = db.relationship('WorkoutSession', backref='workout_type')

    def __repr__(self):
        return f"Workout type: {self.name}"
    
    def __init__(self, name):
        self.name = name

def format_workout_type(workout_type):
    return {
        "id": workout_type.id,
        "name": workout_type.name,
        "created_at": workout_type.created_at,
    }

class WorkoutSession(db.Model):
    __tablename__ = "workout_session"

    id = db.Column(db.Integer, primary_key=True)
    workout_date = db.Column(db.DateTime, nullable=False, default=datetime.now(timezone.utc))
    # a session can be assign to one workout type
    workout_type_id = db.Column(db.Integer, db.ForeignKey('workout_type.id'), nullable=False)
    duration_min = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now(timezone.utc))

    def __repr__(self):
        return f"<WorkoutSession: {self.id}>"
    
    def __init__(self, workout_date, workout_type_id, duration_min):
        self.workout_date = workout_date
        self.workout_type_id = workout_type_id
        self.duration_min = duration_min



def format_workout_session(workout_session):
    return {
        "id": workout_session.id,
        "workout_date": workout_session.workout_date,
        "workout_type_id": workout_session.workout_type_id,
        "duration_min": workout_session.duration_min,
        "created_at": workout_session.created_at,
    }








##### routes
# types
@app.route("/workout-type", methods = ['POST'])
def create_workout_type():
    name = request.json['name']
    workout_type = WorkoutType(name)
    db.session.add(workout_type)
    db.session.commit()
    return format_workout_type(workout_type)

@app.route("/workout-type", methods = ["GET"])
def get_workout_types():
    types = WorkoutType.query.order_by(WorkoutType.name.asc()).all()
    types_list = []
    for type in types:
        types_list.append(format_workout_type(type))
    return {'workout_types': types_list}



#sessions
@app.route("/workout-session", methods = ['POST'])
def create_workout_session():
    workout_date = request.json['workout_date']
    workout_type_id = request.json['workout_type_id']
    duration_min = request.json['duration_min']
    workout_session = WorkoutSession(workout_date, workout_type_id, duration_min)
    db.session.add(workout_session)
    db.session.commit()
    return format_workout_session(workout_session)

@app.route("/workout-session", methods = ["GET"])
def get_workout_sessions():
    week_start = request.args.get('week')
    type = request.args.get('type')

    # if week param exists, filter for only sessions during that week
    query = WorkoutSession.query
    if (week_start):
        # year, month, day = week.split('-')
        week_end = datetime.strptime(week_start, '%Y-%m-%d') + timedelta(days=7)
        query = query.filter(WorkoutSession.workout_date.between(week_start, week_end))
    
    # if type param exists, filter for only sessions of that type
    if (type):
        workout_type_id = WorkoutType.query.filter(WorkoutType.name==type).first().id
        query = query.filter(WorkoutSession.workout_type_id == workout_type_id)

    sessions = query.order_by(WorkoutSession.workout_date.asc()).all()

    sessions_list = []
    for session in sessions:
        sessions_list.append(format_workout_session(session))

    return {'workout_sessions': sessions_list, 'total': len(sessions_list)}






if __name__ == "__main__":
    app.run()

