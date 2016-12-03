test-watch:
	yarn run test-watch

sync-tzdb:
	rsync -avz rsync://rsync.iana.org/tz/tzdb-2016j/ tzdb
