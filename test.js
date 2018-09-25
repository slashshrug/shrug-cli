import test from 'ava'
import execa from 'execa'
import { SHRUG } from '@shrug/shrug'

test('prints shrug', async t => {
  const { stdout } = await execa('./cli.js', { stripEof: false })
  t.is(stdout, SHRUG)
})

test('prints shrug, with newline', async t => {
  const { stdout } = await execa('./cli.js', ['-n'], { stripEof: false })
  t.is(stdout, `${SHRUG}\n`)
})
