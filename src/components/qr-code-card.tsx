"use client";

import { QRCodeSVG } from "qrcode.react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface QRCodeCardProps {
  url: string;
  title: string;
  description: string;
}

export function QRCodeCard({ url, title, description }: QRCodeCardProps) {
  return (
    <Card className="flex flex-col items-center text-center">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <div className="p-4 bg-white rounded-lg">
          <QRCodeSVG
            value={url}
            size={200}
            level="H"
            includeMargin={false}
            className="w-full h-full"
          />
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline break-all"
        >
          {url}
        </a>
      </CardContent>
    </Card>
  );
}
