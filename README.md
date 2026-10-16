# Muay Pro

## Description

This is an application that will give many options for how coaches manage their fighters and track training while seeing how the fighters develop over time.

## Technologies

1. **Frontend:** React + Typescript

2. **Backend:** Python + Django

3. **Database:** SQL

4. **Version Control:** GitHub

## Features

### Mobile Capability

This will allow users to not only use their mobile devices it should also give the ability to the gym to have gym passes digitalized and sign into the gym.

### AI Powered Training Plan Maker

This will be used for coaches to create training plans on certain weaknesses and other aspects that they need to improve on and use Gemini to do it.

### Injury and Recovery Tracking

* Injury and recovery tracking: tracks whether the fighter is injured or not; fighters will be able to report an injury, and so the coaches will be able to see if any of their fighters are injured or not.

### Fighter Rosters and Profiles

* Fighter rosters and profiles: Each of the fighters will have their own profiles with details about them, like their weight, height, age, nickname, fight record, stance, status, and emergency contacts.

### Attendance Tracking

* Attendance tracking: This will let the coaches check to see who attended the sessions, and fighters will be able to input that they have checked in, and over time it will show how many sessions each month the fighter has attended to see if they have been consistent with their sessions. This will help the coaches for their newer fighters so they can see if those newer fighters can be ready for fights.

### Fight Management

* Fight Management: Coaches can add and also track their fighters’ fights, which includes information about the fight like who they are fighting, date of the fight, weight class, result and any notes that might need to be taken. This can build history for the coach’s fighter and show their fight record.

### Progress Tracking

* Progress Tracking: Fighters can log their weight, weights that they have lifted in the weightlifting gym to see if they have improved which all of this can show development of the fighter over time which other benefits from this like the charts which I talk about later.

### Coach Feedback

* Coach Feedback: Coaches will be able to leave any notes on sessions the fighters had, any fights that happened, or just simply how those fighters can improve for next time. Also, fighters will view it on their own profiles too.

### Weight Cut Tracker

* Weight cut tracker: This will be a simple input for the fighters to log their weights each week leading up to their fights, and the application will know of a target weight that the fighter needs to be at.

### Session Scheduling

* Session scheduling: This will be used by the coaches if they need to cancel a certain session or add a new session that week, and it will have details about, like if its sparing or pad work or even just cardio, date, duration and this will add to the fighter’s schedule.

### Video Links

* Video Links: This will be used for adding video links of fights that the fighter did so that they can review the fight after it happened and can watch if they have made mistakes, and later they can work with their coaches to improve on those mistakes. Also, will be used to show examples of fighting moves for newer fighters to learn new things outside of the sessions.

### Schedule Exporting

* Schedule Exporting: This will help the fighters put all the sessions into their phones and get reminders of when they are happening, and they can export it as an ICS file.

### Charts for Better Tracking

* Charts for better tracking: These charts will be used for many different things like weight, training load, fight record and attendance charts.

### Sparring Logs

* Sparring Logs: This will be used by both the fighters and the coaches to track their sparring sessions and to track who they sparred with, date, how intense they went and notes about the session if it went well or any other details about the session.

### Announcements

* Announcements: This will help the coaches to let their fighters know if any sessions are cancelled or must be moved, and if there are any special events that are happening.

### Goals with Progress Tracking

* Goals with progress tracking: This will be used by the coaches to set goals for the fighters, like if that fighter needs to improve on a certain aspect of their fighting or even their cardio or just anything like that.

### Smart Watch Capability

* Smart Watch Capability: This will implement a smart watch to keep track of the fighter’s heart rate and lets the coaches know and the fighters know if they need to up the intensity or lower it.

### Customization Ability

* Customization ability: This will give the ability to become versatile and be able to be used across different gyms and not just one, so they can make it their own and add logos and other such things.

### AI Powered Fight Analysis

* AI Powered Fight Analysis: This will use the imported video and go over them and look like certain moves and looks if theirs mistakes and lets the coaches and fighters know about what to improve for the next fight.

## Prerequisites
Install the following before setting up the project:

* Node.js and npm
* Python
* A SQL database supported by the project
* Git

Installation
Clone the repository:

### Windows 
Once you download git 
Open it by 
1. Clicking the windows button on your computer
2. Click the search bar 
3. Search for git
4. Double click it
5. Then follow the steps below

```bash
git clone <repository-url>
cd <repository-folder>
```

### Set up the backend:

```bash
cd backend
python -m venv .venv 
```

### Activate the virtual environment: 

# macOS / Linux
```bash
source .venv/bin/activate
```

# Windows PowerShell
```bash
 .venv\Scripts\Activate.ps1
```

Install dependencies and prepare the database: 

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### In a separate terminal, set up the frontend:

```bash
cd frontend
npm install
npm run dev
```

## Author 
Samuel Cardo

## License
[GNU GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)
