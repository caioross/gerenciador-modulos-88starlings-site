import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LangProvider } from "../components/i18n";

const GA_ID = "G-TQNBX6NP3S";

export const metadata: Metadata = {
  title: "Gerenciador de Módulos — 88 Starlings",
  description:
    "App web local (Three.js) para catalogar os módulos .glb da nave de 88 Starlings e exportar o modules_catalog.json que o jogo (Unity) consome. Visualizador 3D, validação, offline.",
  keywords: [
    "88 Starlings",
    "Three.js",
    "GLB",
    "modules_catalog",
    "Unity",
    "editor de módulos",
    "visualizador 3D",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="antialiased">
        {GA_ID.indexOf("PLACEHOLDER") === -1 && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
