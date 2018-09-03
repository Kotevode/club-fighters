import * as fights from "..";
import * as accounts from "../../accounts";

describe("create()", async () => {
	it("Creates a new fight", async () => {
		const defaultAccount = await accounts.defaultAccount();
		const { address } = await fights.create();

		const fight = await fights.find(address);
		expect(fight).toMatchObject({
			address,
			players: {
				left: {
					useraddress: defaultAccount
				}
			}
		});
	});
});
