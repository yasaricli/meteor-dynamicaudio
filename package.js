Package.describe({
  name: 'yasaricli:dynamicaudio',
  version: '0.0.1',
  summary: "An interface for writing new audio data API with a Flash fallback for older browsers.",
  git: 'https://github.com/yasaricli/meteor-dynamicaudio.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // js files
  api.addFiles([
    'lib/swfobject.js',
    'lib/dynamicaudio.js'
  ], 'client');

  // export
  api.export(['DynamicAudio']);
});
