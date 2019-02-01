import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config

serve_dir = os.path.abspath('./public')
app = Flask(__name__, template_folder=serve_dir, static_folder=serve_dir)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from app import api