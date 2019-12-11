
all:  commit version-patch build publish

commit:

	cd projects/$(PROJECT) && git add . && git commit -am bump

build:

	ng build $(PROJECT)

version-patch:

	cd projects/$(PROJECT) && npm version patch

publish: build

	cd dist/$(PROJECT) && npm publish --access public

bump:

	cd projects/$(PROJECT) && git add . && git commit -am'bump' && git push && cd ../../ && make all

local:

	cd projects/$(PROJECT) && git add . && git commit -am'bump' && git push && cd ../../ && make build
