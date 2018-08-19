#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

#general
npx sharp -i ./images/logo.png -o ./public/logo/logo.png resize 1024
npx sharp -i ./images/logo.png -o ./public/favicon.ico resize 1024

#favicon
npx sharp -i ./images/logoBG.png -o ./public/icons/favicon-16x16.png resize 16
npx sharp -i ./images/logoBG.png -o ./public/icons/favicon-32x32.png resize 32
npx sharp -i ./images/logoBG.png -o ./public/icons/favicon-96x96.png resize 96

#manifest icons
npx sharp -i ./images/logoBG.png -o ./public/icons/icon-512x512.png resize 512
npx sharp -i ./images/logoBG.png -o ./public/icons/icon-384x384.png resize 384
npx sharp -i ./images/logoBG.png -o ./public/icons/icon-256x256.png resize 256
npx sharp -i ./images/logoBG.png -o ./public/icons/icon-192x192.png resize 192
npx sharp -i ./images/logoBG.png -o ./public/icons/icon-144x144.png resize 144
npx sharp -i ./images/logoBG.png -o ./public/icons/icon-96x96.png resize 96
npx sharp -i ./images/logoBG.png -o ./public/icons/icon-48x48.png resize 48

#apple icons
npx sharp -i ./images/logoBG.png -o ./public/icons/apple-icon-180x180.png resize 180
npx sharp -i ./images/logoBG.png -o ./public/icons/apple-icon-152x152.png resize 152
npx sharp -i ./images/logoBG.png -o ./public/icons/apple-icon-144x144.png resize 144
npx sharp -i ./images/logoBG.png -o ./public/icons/apple-icon-120x120.png resize 120
npx sharp -i ./images/logoBG.png -o ./public/icons/apple-icon-114x114.png resize 114
npx sharp -i ./images/logoBG.png -o ./public/icons/apple-icon-76x76.png resize 76
npx sharp -i ./images/logoBG.png -o ./public/icons/apple-icon-72x72.png resize 72
npx sharp -i ./images/logoBG.png -o ./public/icons/apple-icon-60x60.png resize 60
npx sharp -i ./images/logoBG.png -o ./public/icons/apple-icon-57x57.png resize 57
