from flask import Flask, render_template, request, jsonify
import time
import qrcode
import io
import base64

# Initialize the Flask application
app = Flask(__name__)

@app.route('/')
def index():
    """Renders the main HTML page."""
    return render_template('index.html')

@app.route('/api/first-aid', methods=['POST'])
def get_first_aid_guidance():
    """API endpoint to simulate AI-powered first aid advice."""
    data = request.get_json()
    emergency_text = data.get('emergency', '').lower()
    time.sleep(1.5)  # Simulate AI processing time

    # --- Simple AI Simulation Logic ---
    if 'choking' in emergency_text:
        response_html = """
        <p><strong>Heimlich Maneuver for Choking:</strong></p>
        <ol>
            <li><strong>Confirm the person is choking.</strong> Ask, "Are you choking?" They may not be able to speak but might nod.</li>
            <li><strong>Stand behind the person.</strong> Wrap your arms around their waist.</li>
            <li><strong>Make a fist.</strong> Place it just above their navel.</li>
            <li><strong>Grasp your fist</strong> with your other hand and deliver quick, upward thrusts.</li>
            <li><strong>Repeat thrusts</strong> until the object is expelled or help arrives.</li>
        </ol>
        <div class='alert alert-danger mt-2' role='alert'>
            <strong>Disclaimer:</strong> This is AI-generated advice. Always call local emergency services in a real medical emergency.
        </div>
        """
    elif 'bleeding' in emergency_text or 'cut' in emergency_text:
        response_html = """
        <p><strong>Controlling Severe Bleeding:</strong></p>
        <ol>
            <li><strong>Call for help immediately.</strong></li>
            <li><strong>Apply direct pressure</strong> on the wound with a clean cloth.</li>
            <li><strong>Elevate the injured limb</strong> above the level of the heart if possible.</li>
            <li><strong>Do not remove the cloth</strong> if it's soaked with blood; add more layers on top.</li>
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
            <li><strong>Cool the burn</strong> under cool (not cold) running water for 10-15 minutes.</li>
            <li><strong>Remove jewelry or tight items</strong> from the burned area.</li>
            <li><strong>Cover the burn</strong> with a sterile gauze bandage.</li>
            <li><strong>Do not apply ointments, butter, or ice,</strong> as this can cause more damage.</li>
        </ol>
        <div class='alert alert-danger mt-2' role='alert'>
            <strong>Disclaimer:</strong> This is AI-generated advice. Always call local emergency services in a real medical emergency.
        </div>
        """
    else:
        response_html = """
        <p>I can provide guidance on common scenarios like choking, bleeding, and minor burns.</p>
        <p>If this is a real emergency, please <strong>contact your local emergency services immediately.</strong></p>
        """

    return jsonify({'response': response_html})

@app.route('/api/generate-qr', methods=['POST'])
def generate_qr_code():
    """Receives health data, generates a QR code, and returns it as a data URL."""
    data = request.get_json()

    # Format the data into a clean string for the QR code
    health_info = (
        f"--- CRITICAL HEALTH PROFILE ---\n"
        f"Full Name: {data.get('fullName', 'N/A')}\n"
        f"Blood Type: {data.get('bloodType', 'N/A')}\n\n"
        f"Known Allergies:\n{data.get('allergies', 'None specified')}\n\n"
        f"Current Medications:\n{data.get('medications', 'None specified')}"
    )

    # Generate the QR code image in memory
    qr_img = qrcode.make(health_info)
    
    # Save the image to a byte buffer
    buffered = io.BytesIO()
    qr_img.save(buffered, format="PNG")
    
    # Encode the byte buffer to a base64 string
    img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")
    
    # Format as a data URL to be used directly in an <img> tag
    data_url = f"data:image/png;base64,{img_str}"
    
    return jsonify({'qr_code_url': data_url})

if __name__ == '__main__':
    # Run the app in debug mode for development
    app.run(debug=True)
