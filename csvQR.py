import csv
from qrGeneration import generate_qr

def read_csv(file_path):
    with open(file_path, newline='') as csvfile:
        reader = csv.reader(csvfile)
        return [row[0] for row in reader]  # One column best case scenario

# change acording user's needs
data_to_encode = read_csv("data.csv")
generate_qr(data_to_encode, "output_qr_codes")
