import sinon from "sinon";

import * as fights from "..";
import * as accounts from "../../accounts";

describe("join()", async () => {
	let playerLeft;
	let playerRight;
	let fightAddress;
	let events;

	beforeEach(async () => {
		([playerLeft, playerRight] = await accounts.all());
		({ address: fightAddress, events } = await fights.create({ from: playerLeft }));
	});

	it("Starts fight", async () => {
		const spy = sinon.spy();
		events.on("FIGHT_STARTED", spy);

		await fights.join(fightAddress, { from: playerRight });
		sinon.assert.calledWith(spy, "FIGHT_STARTED", {
			fight: {
				address: fightAddress,
				players: {
					left: {
						address: playerLeft
					},
					right: {
						address: playerRight
					}
				}
			}
		});
	});
});