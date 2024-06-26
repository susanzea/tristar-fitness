"""updated duration_min data type

Revision ID: ab2274e494ff
Revises: 9fdb32130466
Create Date: 2024-06-09 17:11:57.657938

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ab2274e494ff'
down_revision = '9fdb32130466'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('workout_session', schema=None) as batch_op:
        batch_op.add_column(sa.Column('duration_min', sa.Integer(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('workout_session', schema=None) as batch_op:
        batch_op.drop_column('duration_min')

    # ### end Alembic commands ###
