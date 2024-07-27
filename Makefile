test-pw:
	docker run --rm --workdir /work -v `pwd`:/work -t mcr.microsoft.com/playwright:v1.45.3 bash -c 'npx playwright test'
test-pw-update:
	docker run --rm --workdir /work -t -v `pwd`:/work -t mcr.microsoft.com/playwright:v1.45.3 bash -c 'npx playwright test --update-snapshots'
