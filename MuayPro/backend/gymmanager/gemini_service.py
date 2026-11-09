# imports
from django.conf import settings
from groq import Groq

# Connect to Groq
client = Groq(api_key=settings.GROQ_API_KEY)


# Generate an AI training plan and use a f string to give the ability of using the fighter's information in the prompt. 
def generate_training_plan(fighter):

    prompt = f"""
    Create a personalised Muay Thai training plan using the following fighter information.

    Fighter information:
    Name: {fighter['name']}
    Experience: {fighter['experience']}
    Current weight: {fighter['weight']}
    Goal: {fighter['goal']}
    Training days per week: {fighter['training_days']}

    Create a weekly Muay Thai training plan.

    Follow this exact format:

    MONDAY - Session Name

    Focus: Main training focus

    Exercises:
    - Exercise 1
    - Exercise 2
    - Exercise 3

    Intensity: Training intensity

    Notes: Additional information

    Repeat this format for each training day.

    Include rest days where appropriate.

    Put the Rest Days in the correct place in the week based on the number of training days per week.

    IMPORTANT:
    - Do not use Markdown.
    - Do not use tables.
    - Do not use ** or ##.
    - Do not use HTML tags such as <br>.
    - Put each exercise on a separate line.
    - Leave an empty line between each day.
    - Follow the requested number of training days.
    """

# this sends the prompt to the Groq API and specifies the model, who is requesting the prompt and what the prompt contains that it will use to generate the response. 
    response = client.chat.completions.create(
        model="openai/gpt-oss-120b",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

# gets the first reponse from the AI and returns the content of the message as a string.
    return response.choices[0].message.content
