
from django.db import models
from django.contrib.auth.models import User

# user profile model to extend the built-in User model with additional fields
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, default="fighter")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username

# gym model to represent a Muay Thai gym
class Gym(models.Model):
    name = models.CharField(max_length=255)
    logo_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

# return the name of the gym when the object is printed
    def __str__(self):
        return self.name

# fighter model to represent a Muay Thai fighter
class Fighter(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, null=True, blank=True
    )
    name = models.CharField(max_length=100)
    nickname = models.CharField(max_length=100, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    height_feet = models.DecimalField(
        max_digits=4, decimal_places=2, null=True, blank=True
    )
    weight_class = models.CharField(max_length=50, blank=True)
    stance = models.CharField(max_length=50, blank=True)
    wins = models.IntegerField(default=0)
    losses = models.IntegerField(default=0)
    draws = models.IntegerField(default=0)
    status = models.CharField(max_length=20, default="active")
    emergency_contact_name = models.CharField(max_length=255, blank=True)
    emergency_contact_phone = models.CharField(max_length=30, blank=True)


# return the name of the fighter when the object is printed
    def __str__(self):
        return self.name

# training session model to represent a Muay Thai training session
class TrainingSession(models.Model):
    gym = models.ForeignKey(Gym, on_delete=models.CASCADE)
    coach = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    session_type = models.CharField(max_length=50, blank=True)
    starts_at = models.DateTimeField()
    duration_minutes = models.IntegerField(null=True, blank=True)
    capacity = models.IntegerField(null=True, blank=True)
    status = models.CharField(max_length=20, default="scheduled")
    notes = models.TextField(blank=True)

# return the title of the training session when the object is printed
    def __str__(self):
        return self.title

# attendance model to represent a fighter's attendance at a training session
class Attendance(models.Model):
    training_session = models.ForeignKey(
        TrainingSession, on_delete=models.CASCADE
    )
    fighter = models.ForeignKey(Fighter, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, default="present")
    checked_in_at = models.DateTimeField(null=True, blank=True)

# ensure that a fighter can only have one attendance record per training session
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["training_session", "fighter"],
                name="unique_session_attendance",
            )
        ]

# fight model to represent a Muay Thai fight
class Fight(models.Model):
    fighter = models.ForeignKey(Fighter, on_delete=models.CASCADE)
    opponent_name = models.CharField(max_length=255)
    event_name = models.CharField(max_length=255, blank=True)
    fight_date = models.DateField(null=True, blank=True)
    weight_class = models.CharField(max_length=50, blank=True)
    result = models.CharField(max_length=20, default="upcoming")
    notes = models.TextField(blank=True)

# return a string representation of the fight, showing the fighter's name and the opponent's name
    def __str__(self):
        return f"{self.fighter.name} vs {self.opponent_name}"

# progress entry model to represent a fighter's progress in training
class ProgressEntry(models.Model):
    fighter = models.ForeignKey(Fighter, on_delete=models.CASCADE)
    recorded_by = models.ForeignKey(User, on_delete=models.CASCADE)
    progress_type = models.CharField(max_length=50)
    value = models.DecimalField(max_digits=10, decimal_places=2)
    unit = models.CharField(max_length=30)
    recorded_at = models.DateTimeField(auto_now_add=True)
    notes = models.TextField(blank=True)

# injury model to represent a fighter's injury
class Injury(models.Model):
    fighter = models.ForeignKey(Fighter, on_delete=models.CASCADE)
    reported_by = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField()
    body_part = models.CharField(max_length=100, blank=True)
    severity = models.CharField(max_length=30, blank=True)
    status = models.CharField(max_length=20, default="reported")
    reported_at = models.DateTimeField(auto_now_add=True)
    cleared_at = models.DateTimeField(null=True, blank=True)

# training plan model to represent a fighter's training plan
class TrainingPlan(models.Model):
    coach = models.ForeignKey(User, on_delete=models.CASCADE)
    fighter = models.ForeignKey(
        Fighter, on_delete=models.CASCADE, null=True, blank=True
    )
    gym = models.ForeignKey(Gym, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    goal = models.TextField(blank=True)
    generated_by_ai = models.BooleanField(default=False)
    plan_content = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default="draft")

# feedback model to represent feedback from a coach to a fighter
class CoachFeedback(models.Model):
    coach = models.ForeignKey(User, on_delete=models.CASCADE)
    fighter = models.ForeignKey(Fighter, on_delete=models.CASCADE)
    training_session = models.ForeignKey(
        TrainingSession, on_delete=models.SET_NULL,
        null=True, blank=True
    )
    fight = models.ForeignKey(
        Fight, on_delete=models.SET_NULL, null=True, blank=True
    )
    feedback = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

# weight entry model to represent a fighter's weight tracking
class WeightEntry(models.Model):
    fighter = models.ForeignKey(Fighter, on_delete=models.CASCADE)
    weight_kg = models.DecimalField(max_digits=5, decimal_places=2)
    target_weight_kg = models.DecimalField(
        max_digits=5, decimal_places=2, null=True, blank=True
    )
    recorded_at = models.DateTimeField(auto_now_add=True)
    notes = models.TextField(blank=True)

# goal model to represent a fighter's training goal
class Goal(models.Model):
    fighter = models.ForeignKey(Fighter, on_delete=models.CASCADE)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    target_value = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True
    )
    target_unit = models.CharField(max_length=30, blank=True)
    due_date = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=20, default="not_started")
    created_at = models.DateTimeField(auto_now_add=True)

# sparring log model to represent a sparring session between fighters
class SparringLog(models.Model):
    gym = models.ForeignKey(Gym, on_delete=models.CASCADE)
    recorded_by = models.ForeignKey(User, on_delete=models.CASCADE)
    session_date = models.DateTimeField()
    intensity = models.CharField(max_length=30, blank=True)
    notes = models.TextField(blank=True)
    fighters = models.ManyToManyField(
        Fighter, through="SparringParticipant"
    )

# return a string representation of the sparring log, showing the gym name and session date
class SparringParticipant(models.Model):
    sparring_log = models.ForeignKey(
        SparringLog, on_delete=models.CASCADE
    )
    fighter = models.ForeignKey(Fighter, on_delete=models.CASCADE)

# ensure that a fighter can only be associated with a sparring log once
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["sparring_log", "fighter"],
                name="unique_sparring_participant",
            )
        ]

# video link model to represent a video link associated with a fighter or fight
class VideoLink(models.Model):
    fighter = models.ForeignKey(Fighter, on_delete=models.CASCADE)
    added_by = models.ForeignKey(User, on_delete=models.CASCADE)
    fight = models.ForeignKey(
        Fight, on_delete=models.SET_NULL, null=True, blank=True
    )
    title = models.CharField(max_length=255)
    video_url = models.URLField()
    video_type = models.CharField(max_length=50, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

# announcement model to represent an announcement made by a gym
class Announcement(models.Model):
    gym = models.ForeignKey(Gym, on_delete=models.CASCADE)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    body = models.TextField()
    published_at = models.DateTimeField(null=True, blank=True)
    expires_at = models.DateTimeField(null=True, blank=True)

# workout session model to represent a fighter's workout session
class WorkoutSession(models.Model):
    fighter = models.ForeignKey(Fighter, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, blank=True)
    started_at = models.DateTimeField()
    ended_at = models.DateTimeField(null=True, blank=True)
    source = models.CharField(max_length=20, default="manual")
