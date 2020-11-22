.DEFAULT_GOAL := check

init:
	@echo "Initialising the project"
	@npm install

start:
	@echo "🏃‍♀️ Starting project"
	@npm run dev

check: --pre_check test build
	@echo "✅"

docs:
	@doctoc README.md
	@echo "📚 Documentation ready!"

clean:
	@echo "🛁 Cleaning..."
	@npm run clean

clean_all:
	@echo "🧨 Clean all"
	@npm run cleanup

test:
	@echo "Testing..."
	@npm run test-ci

build:
	@echo "👩‍🏭 Building..."
	@npm run build

release_patch: release

release_minor: check
	@.scripts/finish-release minor

release_major: check
	@.scripts/finish-release major

release: check
	@.scripts/finish-release patch

--pre_check:
	@npm run clean
	@npm install
	@npm run lint
	@npm run build
