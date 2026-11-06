# from django.conf import settings
# from google import genai

# # Connect to Gemini
# client = genai.Client(api_key=settings.GEMINI_API_KEY)


# # Generate an AI training plan
# def generate_training_plan(fighter):

#     prompt = f"""
#     Create a personalised Muay Thai training plan using the following fighter information.

#     Fighter information:
#     Name: {fighter['name']}
#     Experience: {fighter['experience']}
#     Current weight: {fighter['weight']}
#     Goal: {fighter['goal']}
#     Training days per week: {fighter['training_days']}

#     Create a weekly training plan that includes:
#     - Exactly {fighter['training_days']} training days per week.
#     - Session type for each training day.
#     - Exercises for each session.
#     - Training intensity for each session.
#     - Rest or active recovery on all remaining days.

#     Do not schedule more training days than requested.

#     Make the plan suitable for the fighter's experience and goals.
#     Keep the plan realistic and easy to follow.
#     """

#     response = client.models.generate_content(
#         model="gemini-2.5-flash-lite",
#         contents=prompt
#     )

#     return response.text





from django.conf import settings
from groq import Groq

# Connect to Groq
client = Groq(api_key=settings.GROQ_API_KEY)


# Generate an AI training plan
def generate_training_plan(fighter):

    prompt = f"""
    Create a personalised Muay Thai training plan using the following fighter information.

    Fighter information:
    Name: {fighter['name']}
    Experience: {fighter['experience']}
    Current weight: {fighter['weight']}
    Goal: {fighter['goal']}
    Training days per week: {fighter['training_days']}

    Create a weekly training plan that includes:
    - Exactly {fighter['training_days']} training days per week.
    - Session type for each training day.
    - Exercises for each session.
    - Training intensity for each session.
    - Rest or active recovery on all remaining days.

    Do not schedule more training days than requested.
    Make the plan realistic and suitable for the fighter's experience and goals.
    """

    response = client.chat.completions.create(
        model="openai/gpt-oss-120b",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content
