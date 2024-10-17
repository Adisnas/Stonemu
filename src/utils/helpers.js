export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

export function formatTime(date) {
  return new Date(date).toLocaleTimeString();
}

export function truncateAddress(address) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
