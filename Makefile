MAKEFLAGS += -s

E =
S = $(E) $(E)

default:
	echo > n
	cat $(subst $(S), n ,$(wildcard IDL/*.js)) > fxos-ide-helper.js
	rm n
