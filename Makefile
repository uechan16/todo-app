test-pw:
	docker run --rm -t -v `pwd`:/work tah-playwright bash -c 'npx playwright test'
test-pw-update:
	docker run --rm -t -v `pwd`:/work tah-playwright bash -c 'npx playwright test --update-snapshots'
