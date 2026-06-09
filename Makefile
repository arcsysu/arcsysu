.PHONY: build install run clean reset

# ======================
# Docker
# ======================
build:
	docker compose build --no-cache

install:
	docker compose run --rm jekyll sh -c "bundle install"

run:
	docker compose up --build

# ======================
# Cleanup
# ======================
clean:
	docker compose down --remove-orphans

reset: clean
	rm -rf _site .jekyll-cache .bundle vendor
	