"use client";

import NextError from "next/error";

export default function GlobalNotFound() {
  return <NextError statusCode={404} />;
}
