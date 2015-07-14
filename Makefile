preview:
	hugo server -w -D

build:
	hugo

publish: build
	git subtree push --prefix=public git@github.com:Pankrat/pankrat.github.io.git gh-pages
