export type BootstrapStatus = 'down' | 'starting' | 'inited' | 'up'
export type BootstrapStates = typeof BootstrapStates
export const BootstrapStates = {
  DOWN: 'down',
  STARTING: 'starting',
  INITED: 'inited',
  UP: 'up',
} as const
