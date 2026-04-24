RED='\033[0;31m'
NC='\033[0m'

echo -e "${RED}[*] franework kontrol..${NC}"

if [ "$EUID" -ne 0 ]; then
  echo "[!] derin cikmadi"
fi

echo "[*] donusum..."
sleep 0.5
export HISTFILE=/dev/null
export HISTSIZE=0

NODE_PATH=$(which node)
if [ -z "$NODE_PATH" ]; then
    echo -e "${RED}[!] V8 patlak.${NC}"
    exit 1
fi

echo "[*] ..."
echo "[*] ..."
sleep 1

echo -e "${RED}[+] gizlilik atif.${NC}"
exit 0