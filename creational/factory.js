class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 100;
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = 300;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership,
  };

  create(name, type = "simple") {
    const Membership = MemberFactory.list[type] || MemberFactory.list.standard;
    const member = new Membership(name);
    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}: ${this.cost})`);
    };
    return member;
  }
}

const factory = new MemberFactory();

const members = [
  factory.create("Alex", "simple"),
  factory.create("John"),
  factory.create("Neo", "premium"),
];

members.forEach((m) => m.define);
