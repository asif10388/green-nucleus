import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type FormData = {
  name: string;
  email: string;
  phone: string;
  college: string;
  segment?: string;
  case_title?: string;
  transactionId?: string;
  CREATED_AT?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
  }

  const {
    name,
    email,
    phone,
    college,
    segment,
    case_title,
    transactionId,
  }: FormData = req.body;

  if (!name || !email || !phone) {
    res.status(400).json({ message: "Missing required fields" });
  }

  const data = {
    name,
    email,
    phone,
    college,
    segment,
    case_title,
    transactionId,
    CREATED_AT: new Date().toISOString(),
  };

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheet = google.sheets({ auth, version: "v4" });

    const range =
      req.query.type === "free_event"
        ? `${req.query.type}!A1:E1`
        : `${req.query.type}!A1:H1`;

    console.log(range);

    const response = await sheet.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [Object.values(data)],
      },
    });

    return res.status(200).json({ data: response.data });
  } catch (error: any) {
    res.status(500).json({ message: error.message ?? "Something went wrong" });
  }
}
