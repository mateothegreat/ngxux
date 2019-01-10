
all:  version-patch build publish

commit:

	cd projects/$(PROJECT) && pwd &&git commit projects/$(PROJECT) -am $(MESSAGE)

build:

	ng build $(PROJECT)

version-patch:

	cd projects/$(PROJECT) && npm version patch

publish:

	cd dist/$(PROJECT) && npm publish --access public
