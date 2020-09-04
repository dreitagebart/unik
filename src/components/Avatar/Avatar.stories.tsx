import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Avatar, AvatarProps } from './Avatar'
import { Unik } from '../Unik'

export default {
  title: 'Components/Avatar',
  component: Avatar
} as Meta

const Template: Story<AvatarProps> = (args) => (
  <Unik>
    <Avatar {...args} />
  </Unik>
)

export const Primary = Template.bind({})
Primary.args = {
  contain: false,
  color: '#fff',
  background: '#3c1b1f',
  children: '',
  onClick: () => alert('Hi'),
  source:
    'https://lh3.googleusercontent.com/-_l0fEbS4Rbo/XlB0D6kywoI/AAAAAAAAVO8/_RaXwyEdog05A0-kpWiyKqOtsZmBo-5kACEwYBhgLKtMDAL1OcqxtngHzsKFugk2XQKtHQ3KIzDtvYSAVhEvfqpXwGEY2Q_z6pzrCLvwohSL4UNgA8PItvpxHdPwMEoEnF-w4zQuJcLgnau7PK7fOoK2tGzlWYNN0A7upCsLBMnclJryAJFs9ZsuDODz7ow46PvqStSYPKLcAMtDRyQSqCByqYQZ4itezs3q8W9tKmQJEZ3RPQxzTIl0D5R8yONz_K1Q0k9ZkdRPk4_IsYVeLCoLV5ET_aGGq209Yb_yCQ0fXvlF_fnCTVNHF1Q6CN6DsXSgTBtwoQWcd6qaWpSSeiTsrQeI1d_ldAuT94mbYJoRUiNSEE-sQFeEBOF1k46wPGKlh7qT-r2lR6eDT7JTjTjyz6YhRDMAXgGhmHx9c6VsQBfw73y05aXLgsPQNrJ6dSXpkSo2rurQcyAbZ07CQqsnVgFcikKOrc8CXSAPG2bVAZ6aucXsDl2AMqLAEKEcEDLgmCOKltjzjufUvfVh5X1KM97L5U_kkVABLX9_nk599EU6AS1g5mEGwv54hkpITO9jPy7TrQvcygW6mH_65zQHXOSVrMiTGgO8d6lKlsN7QU6FtY7mUI0JEDQdqLg8ZW6hIMVnig30d-lw8JWX-FEbFZhMw4cev-gU/w140-h140-p/2020-02-21.jpg'
}
