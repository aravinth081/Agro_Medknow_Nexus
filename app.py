from flask import Flask, render_template, request, jsonify
import time

# Initialize the Flask application
app = Flask(__name__)

@app.route('/')
def index():
    """
    Renders the main HTML page.
    """
    return render_template('index.html')

@app.route('/api/first-aid', methods=['POST'])
def get_first_aid_guidance():
    """
    API endpoint to simulate AI-powered first aid advice.
    It receives a text description of an emergency and returns step-by-step guidance.
    """
    # Get the user's message from the incoming JSON request
    data = request.get_json()
    emergency_text = data.get('emergency', '').lower()

    # Simulate a delay to mimic AI processing
    time.sleep(1.5)

    # --- Simple AI Simulation Logic ---
    # In a real-world application, you would replace this with a call to a
    # large language model (LLM) or a more sophisticated expert system.
    if 'choking' in emergency_text:
        response_html = """
        <p><strong>Heimlich Maneuver for Choking:</strong></p>
        <ol>
            <li><strong>Confirm the person is choking.</strong> Ask, "Are you choking?" They may not be able to speak but might nod.</li>
            <li><strong>Stand behind the person.</strong> Wrap your arms around their waist.</li>
            <li><strong>Make a fist.</strong> Place the thumb side of your fist just above their navel, well below the breastbone.</li>
            <li><strong>Grasp your fist</strong> with your other hand and deliver quick, upward thrusts into the abdomen.</li>
            <li><strong>Repeat thrusts</strong> until the object is expelled or the person becomes unconscious. If they become unconscious, call emergency services immediately.</li>
        </ol>
        <div class='alert alert-danger mt-2' role='alert'>
            <strong>Disclaimer:</strong> This is AI-generated advice. Always call local emergency services in a real medical emergency.
        </div>
        """
    elif 'bleeding' in emergency_text or 'cut' in emergency_text:
        response_html = """
        <p><strong>Controlling Severe Bleeding:</strong></p>
        <ol>
            <li><strong>Call for help immediately.</strong> Alert local emergency services.</li>
            <li><strong>Apply direct pressure.</strong> Use a clean cloth, bandage, or your hands to apply firm and constant pressure directly on the wound.</li>
            <li><strong>Elevate the injured limb</strong> above the level of the heart if possible, while continuing to apply pressure.</li>
            <li><strong>Do not remove the cloth</strong> if it becomes soaked with blood. Add more layers on top and continue applying pressure.</li>
            <li><strong>Wait for medical professionals</strong> to arrive.</li>
        </ol>
        <div class='alert alert-danger mt-2' role='alert'>
            <strong>Disclaimer:</strong> This is AI-generated advice. Always call local emergency services in a real medical emergency.
        </div>
        """
    elif 'burn' in emergency_text:
        response_html = """
        <p><strong>First Aid for Minor Burns:</strong></p>
        <ol>
            <li><strong>Cool the burn.</strong> Immediately hold the burned area under cool (not cold) running water for about 10-15 minutes.</li>
            <li><strong>Remove jewelry or tight items</strong> from the burned area gently and quickly, before it starts to swell.</li>
            <li><strong>Cover the burn</strong> with a sterile gauze bandage or a clean cloth. Do not use fluffy cotton.</li>
            <li><strong>Do not apply ointments, butter, or ice</strong> to the burn, as this can cause more damage.</li>
            <li>For severe burns, call emergency services immediately.</li>
        </ol>
        <div class='alert alert-danger mt-2' role='alert'>
            <strong>Disclaimer:</strong> This is AI-generated advice. Always call local emergency services in a real medical emergency.
        </div>
        """
    else:
        response_html = """
        <p>I am designed to provide guidance on common first aid scenarios like choking, bleeding, and minor burns. Please describe one of these situations.</p>
        <p>If this is a real emergency, please <strong>contact your local emergency services immediately.</strong></p>
        """

    return jsonify({'response': response_html})

if __name__ == '__main__':
  
    app.run(debug=True)