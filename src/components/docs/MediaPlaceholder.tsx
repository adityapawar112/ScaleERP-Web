import React from "react";
import { MediaMockup } from "@/components/MediaMockup";

function getScreenshotForDescription(desc: string): string {
  const lower = desc.toLowerCase();
  if (lower.includes("license") || lower.includes("fingerprint") || lower.includes("tamper") || lower.includes("clock") || lower.includes("hardware")) {
    return "/assets/LicenseMangement.webp";
  }
  if (lower.includes("backup") || lower.includes("restore") || lower.includes("google") || lower.includes("cloud")) {
    return "/assets/Backups.webp";
  }
  if (lower.includes("whatsapp") || lower.includes("preset") || lower.includes("template")) {
    return "/assets/WhatappManager.webp";
  }
  if (lower.includes("report") || lower.includes("excel") || lower.includes("pdf") || lower.includes("export")) {
    return "/assets/Reports.webp";
  }
  if (lower.includes("broker") || lower.includes("customer") || lower.includes("ledger") || lower.includes("history")) {
    return "/assets/TransactionRecords.webp";
  }
  if (lower.includes("invoice") || lower.includes("thermal") || lower.includes("layout") || lower.includes("styling") || lower.includes("brand") || lower.includes("setting")) {
    return "/assets/CustomBills.webp";
  }
  if (lower.includes("sale") || lower.includes("bill") || lower.includes("product") || lower.includes("transaction") || lower.includes("payment details") || lower.includes("stock")) {
    return "/assets/AddTransaction.webp";
  }
  if (lower.includes("marathi") || lower.includes("language")) {
    return "/assets/MarathiDashboard.webp";
  }
  return "/assets/Dashboard.webp";
}

export function MediaPlaceholder({ description, type = "image" }: { description: string, type?: "image" | "video" }) {
  const imageSrc = getScreenshotForDescription(description);

  return (
    <div className="w-full my-8 not-prose">
      <MediaMockup 
        type={type} 
        src={imageSrc} 
        caption={description} 
        className="shadow-md"
      />
    </div>
  );
}
