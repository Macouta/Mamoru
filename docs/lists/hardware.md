---
title: Hardware
description:
meta:
\- name: description
content:
\- name: keywords
content:
---

# Hardware

## PC Hardware

* Processor : Intel Core i7 8700K clocked at 3.70 GHz
* Motherboard : Z370 GAMING PRO CARBON (MS-7B45) 2.0
* Memory : Crucial 8GB 1.33GHz x2
* Graphics card : AMD Radeon RX Vega 64
* Hard drives : 120GB SSD / 1TB HDD
* Keyboard : Corsair Gaming K55 RGB
* Screens : IIYAMA 24,5" LED - G-MASTER G2530HSU-B1 Black Hawk x2

## DNS Config

```
@	IN SOA dns113.ovh.net. tech.ovh.net. (2019111600 86400 3600 3600000 300)
                          IN NS     ns113.ovh.net.
                          IN NS     dns113.ovh.net.
                          IN MX     1 mx1.mail.ovh.net.
                          IN MX     100 mx3.mail.ovh.net.
                          IN MX     5 mx2.mail.ovh.net.
                          IN A      164.132.235.17
                          IN A      185.199.108.153
                      600 IN TXT    "v=spf1 include:mx.ovh.com ~all"
                          IN TXT    "1|www.macouta.fr"
_autodiscover._tcp        IN SRV    0 0 443 mailconfig.ovh.net.
_imaps._tcp               IN SRV    0 0 993 ssl0.ovh.net.
_submission._tcp          IN SRV    0 0 465 ssl0.ovh.net.
autoconfig                IN CNAME  mailconfig.ovh.net.
autodiscover              IN CNAME  mailconfig.ovh.net.
ftp                       IN CNAME  macouta.fr.
imap                      IN CNAME  ssl0.ovh.net.
mail                      IN CNAME  ssl0.ovh.net.
pop3                      IN CNAME  ssl0.ovh.net.
smtp                      IN CNAME  ssl0.ovh.net.
www                       IN CNAME  macouta.github.io.
```