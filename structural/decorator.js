class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

function aws(server) {
  server.isAws = true;
  server.awsInfo = function () {
    return `aws: ${server.url}`;
  };
  return server;
}

function azure(server) {
  server.isAzure = true;
  server.port += 500;
  return server;
}

const simpleServer = new Server("1.1.1.1", 8080);
console.log("simple", simpleServer);
const awsServer = aws(new Server("8.8.8.8", 80));
console.log("awsServer", awsServer);
console.log("awsServer", awsServer, awsServer.isAws);
const azureServer = azure(new Server("2.2.2.2", 3000));
console.log("azureServer", azureServer);
