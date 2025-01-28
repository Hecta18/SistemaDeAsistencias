import qrcode
from pathlib import Path

def generate_qr(data_list, output_folder):
    # Create output folder if it doesn't exist
    # Path(output_folder).mkdir(parents=True, exist_ok=True)

    for index, data in enumerate(data_list):
        qr = qrcode.QRCode(version=1, error_correction=qrcode.constants.ERROR_CORRECT_L, box_size=10, border=4)
        qr.add_data(data)
        qr.make(fit=True)

        img = qr.make_image(fill_color="black", back_color="white")
        img.save(f"{output_folder}/qr_code_{index + 1}.png")

    print(f"Generated {len(data_list)} QR codes in {output_folder}")
