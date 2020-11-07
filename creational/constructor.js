// function Server(name, ip) {
//   this.name = name;
//   this.ip = ip;
// }

// Server.prototype.getUrl = function() {
//   return `https://${this.ip}:8080`;
// }

class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }

  getUrl() {
    return `https://${this.ip}:8080`;
  }
}

const google = new Server("Google server", "8.8.8.8");
console.log(google.getUrl());
