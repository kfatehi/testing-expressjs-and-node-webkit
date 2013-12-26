all: bundle

bundle: clean
	zip app.nw -r ./*

run: bundle
	open app.nw

clean:
	rm -rf app.nw
