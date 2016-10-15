module.exports = {
	// Add empty lines after curly braces.
	line_after_brace: {
		src: [ 'style.css' ],
		overwrite: true,
		replacements: [ {
			from: /\}\n(?!\n)(?!\})|\}(?=.)/g,
			to: function() {
				return '}\n\n';
			}
		} ]
	},

	// Add empty lines after DocBlocks and comments.
	line_after_docblock: {
		src: [ 'style.css' ],
		overwrite: true,
		replacements: [ {
			from: /\*\/\n(?!\n)|\*\/(?=.)/g,
			to: function() {
				return '*/\n\n';
			}
		} ]
	},

	// Replace theme version in project.scss
	version_style: {
		src: [ 'assets/css/sass/project.scss' ],
		overwrite: true,
		replacements: [ {
			from: /Version:.*$/m,
			to:   'Version:     <%= package.version %>' // Exactly 5 spaces.
		} ]
	},

	// Replace theme version in README.txt
	version_readme: {
		src: [ 'README.txt' ],
		overwrite: true,
		replacements: [ {
			from: /Version:.*$/m,
			to:   'Version:           <%= package.version %>' // Exactly 11 spaces.
		} ]
	},

	// Replace version in functions.php
	version_functions: {
		src: [ 'functions.php' ],
		overwrite: true,
		replacements: [ {
			from: /define\(.*(?=\_VERSION\',\s*\'\d\.\d\.\d\'\s*\)\;).*$/m,
			to:   'define( \'<%= package.constant %>_VERSION\', \'<%= package.version %>\' );'
		} ]
	}

}
