
console.log('  Running @quasar/icongenie v' + require('../../package.json').version)

console.log(`
  Example usage
    $ icongenie <command> <options>

  Help for a command
    $ icongenie <command> --help
    $ icongenie <command> -h

  Options
    --version, -v Print Quasar Icon Genie CLI version

  Commands
    generate, g   Generate App icons & splashscreens
    verify, v     Verify your Quasar app's icons &
                    splashscreens
    profile, p    Create Icon Genie profile files
    help, h       Display this message
`)
