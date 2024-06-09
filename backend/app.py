from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone

app = Flask(__name__)
app.app_context().push()
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://susanzea:EW1922!postgres@localhost:5432/tristar_fitness"
db=SQLAlchemy(app)

class WorkoutType(db.Model):
    __tablename__ = "workout_type"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now(timezone.utc))

    def __repr__(self):
        return f"Event: {self.name}"
    
    def __init__(self, name):
        self.name = name

def format_workout_type(workout_type):
    return {
        "id": workout_type.id,
        "name": workout_type.name,
        "created_at": workout_type.created_at,
    }

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

if __name__ == "__main__":
    app.run()

