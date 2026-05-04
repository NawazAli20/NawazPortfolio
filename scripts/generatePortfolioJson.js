import fs from "fs";
import path from "path";
import mammoth from "mammoth";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

const inputFile = process.argv[2];

if (!inputFile) {
  console.error("Please provide a resume file.");
  console.error("Example: node scripts/generatePortfolioJson.js resumes/resume.docx");
  process.exit(1);
}

const outputPath = path.join(process.cwd(), "src", "dbs", "portfolio.json");

async function extractTextFromDocx(filePath) {
  const result = await mammoth.extractRawText({ path: filePath });
  return result.value;
}

async function extractTextFromPdf(filePath) {
  const buffer = fs.readFileSync(filePath);
  const result = await pdfParse(buffer);
  return result.text;
}

function extractEmail(text) {
  const match = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return match ? match[0] : "";
}

function extractPhone(text) {
  const match = text.match(
    /(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}/
  );
  return match ? match[0] : "";
}

function extractWebsite(text) {
  const match = text.match(/https?:\/\/[^\s]+|www\.[^\s]+/i);
  return match ? match[0] : "";
}

function extractName(text) {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return lines[0] || "";
}

function extractSection(text, sectionTitle) {
  const sectionTitles = [
    "Education",
    "Experience",
    "Employment",
    "Academic Experience",
    "Professional Experience",
    "Research",
    "Teaching",
    "Publications",
    "Projects",
    "Grants",
    "Awards",
    "Honors",
    "Skills",
    "Service",
    "References",
  ];

  const lowerText = text.toLowerCase();
  const startIndex = lowerText.indexOf(sectionTitle.toLowerCase());

  if (startIndex === -1) return [];

  let endIndex = text.length;

  for (const title of sectionTitles) {
    if (title.toLowerCase() === sectionTitle.toLowerCase()) continue;

    const nextIndex = lowerText.indexOf(title.toLowerCase(), startIndex + 1);

    if (nextIndex !== -1 && nextIndex < endIndex) {
      endIndex = nextIndex;
    }
  }

  const sectionText = text.substring(startIndex, endIndex).trim();

  return sectionText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .slice(1);
}

function generatePortfolioJson(text) {
  return {
    profile: {
      name: extractName(text),
      email: extractEmail(text),
      phone: extractPhone(text),
      website: extractWebsite(text),
      title: "",
      affiliation: "",
      location: "",
      summary: "",
    },

    education: extractSection(text, "Education"),
    experience: extractSection(text, "Experience"),
    research: extractSection(text, "Research"),
    teaching: extractSection(text, "Teaching"),
    publications: extractSection(text, "Publications"),
    projects: extractSection(text, "Projects"),
    grants: extractSection(text, "Grants"),
    awards: extractSection(text, "Awards"),
    skills: extractSection(text, "Skills"),
    service: extractSection(text, "Service"),

    rawText: text,
  };
}

async function main() {
  const filePath = path.resolve(inputFile);
  const ext = path.extname(filePath).toLowerCase();

  let text = "";

  if (ext === ".docx") {
    text = await extractTextFromDocx(filePath);
  } else if (ext === ".pdf") {
    text = await extractTextFromPdf(filePath);
  } else {
    console.error("Only .docx and .pdf files are supported.");
    process.exit(1);
  }

  const json = generatePortfolioJson(text);

  fs.writeFileSync(outputPath, JSON.stringify(json, null, 2), "utf-8");

  console.log(`Portfolio JSON created successfully: ${outputPath}`);
}

main();