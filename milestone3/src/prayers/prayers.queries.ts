export const prayerQueries = {
	readPrayers:
		`SELECT id as prayerId, name as name, anonymous as anonymous, prayerRequest as prayerRequest from prayer.prayers`,
	createPrayer:
		`INSERT INTO PRAYERS(name, anonymous, prayerRequest) VALUES(?,?,?)`,
	updatePrayer:
		`UPDATE prayer.prayers SET name=?, anonymous=?, prayerRequest=? WHERE id = ?`,
	deletePrayer:
		`DELETE FROM prayer.prayers where id = ?`,
}