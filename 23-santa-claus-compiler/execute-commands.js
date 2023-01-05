export function executeCommands (commands) {
  const cpu = Array(8).fill(0)

  const cmd = {
    MOV: (x) => {
      const mov = x.split(',')[0].split(' ')[1]
      cpu[+x.at(-1)] = (cpu[+mov.at(-1)] * +mov.startsWith('V')) + ~~mov
    },
    ADD: (x) => {
      const v1 = +x.split(',')[0].at(-1)
      const v2 = +x.split(',')[1].at(-1)
      cpu[v1] = (cpu[v1] + cpu[v2]) & 256
    },
    INC: (x) => {
      cpu[+x.at(-1)] = (cpu[+x.at(-1)] + 1) & 255
    },
    DEC: (x) => {
      cpu[+x.at(-1)] = (cpu[+x.at(-1)] - 1) & 255
    },
    JMP: (x) => {
      commands = commands
        .concat(
          commands.slice(+x.split(' ').at(-1),
            (commands.indexOf(x) + 1) * !!cpu[0])
        )
    }
  }

  for (let i = 0; i < commands.length; i++) {
    cmd[commands[i].split(' ')[0]](commands[i])
  }

  return cpu
}