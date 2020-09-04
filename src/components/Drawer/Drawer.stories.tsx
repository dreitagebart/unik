import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Drawer, DrawerProps } from './Drawer'
import { Unik } from '../Unik'
import { Button } from '../Button'

export default {
  title: 'Components/Drawer',
  component: Drawer
} as Meta

const Template: Story<DrawerProps> = (args) => {
  const [state, setState] = useState(false)

  return (
    <Unik>
      <Drawer
        {...args}
        open={state}
        onClose={() => setState(false)}
        onOpen={() => setState(true)}
      >
        <p>
          Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
          wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
          Umständen, in denen Mühen und Schmerz ihm große Freude bereiten
          können. Um ein <strong>triviales Beispiel</strong> zu nehmen, wer von
          uns unterzieht sich je anstrengender körperlicher Betätigung, außer um
          Vorteile daraus zu ziehen? Aber <a href="#">link</a> wer hat irgend
          ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine
          Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der
          Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich
          zieht?
        </p>
        <p>
          Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
          wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
          Umständen, in denen Mühen und Schmerz ihm große Freude bereiten
          können. Um ein <strong>triviales Beispiel</strong> zu nehmen, wer von
          uns unterzieht sich je anstrengender körperlicher Betätigung, außer um
          Vorteile daraus zu ziehen? Aber <a href="#">link</a> wer hat irgend
          ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine
          Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der
          Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich
          zieht?
        </p>
        <p>
          Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
          wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
          Umständen, in denen Mühen und Schmerz ihm große Freude bereiten
          können. Um ein <strong>triviales Beispiel</strong> zu nehmen, wer von
          uns unterzieht sich je anstrengender körperlicher Betätigung, außer um
          Vorteile daraus zu ziehen? Aber <a href="#">link</a> wer hat irgend
          ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine
          Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der
          Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich
          zieht?
        </p>
        <p>
          Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
          wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
          Umständen, in denen Mühen und Schmerz ihm große Freude bereiten
          können. Um ein <strong>triviales Beispiel</strong> zu nehmen, wer von
          uns unterzieht sich je anstrengender körperlicher Betätigung, außer um
          Vorteile daraus zu ziehen? Aber <a href="#">link</a> wer hat irgend
          ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine
          Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der
          Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich
          zieht?
        </p>
        <p>
          Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
          wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
          Umständen, in denen Mühen und Schmerz ihm große Freude bereiten
          können. Um ein <strong>triviales Beispiel</strong> zu nehmen, wer von
          uns unterzieht sich je anstrengender körperlicher Betätigung, außer um
          Vorteile daraus zu ziehen? Aber <a href="#">link</a> wer hat irgend
          ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine
          Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der
          Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich
          zieht?
        </p>
        <p>
          Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
          wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
          Umständen, in denen Mühen und Schmerz ihm große Freude bereiten
          können. Um ein <strong>triviales Beispiel</strong> zu nehmen, wer von
          uns unterzieht sich je anstrengender körperlicher Betätigung, außer um
          Vorteile daraus zu ziehen? Aber <a href="#">link</a> wer hat irgend
          ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine
          Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der
          Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich
          zieht?
        </p>
        <p>
          Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
          wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
          Umständen, in denen Mühen und Schmerz ihm große Freude bereiten
          können. Um ein <strong>triviales Beispiel</strong> zu nehmen, wer von
          uns unterzieht sich je anstrengender körperlicher Betätigung, außer um
          Vorteile daraus zu ziehen? Aber <a href="#">link</a> wer hat irgend
          ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine
          Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der
          Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich
          zieht?
        </p>
        <p>
          Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
          wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
          Umständen, in denen Mühen und Schmerz ihm große Freude bereiten
          können. Um ein <strong>triviales Beispiel</strong> zu nehmen, wer von
          uns unterzieht sich je anstrengender körperlicher Betätigung, außer um
          Vorteile daraus zu ziehen? Aber <a href="#">link</a> wer hat irgend
          ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine
          Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der
          Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich
          zieht?
        </p>
        <p>
          Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
          wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
          Umständen, in denen Mühen und Schmerz ihm große Freude bereiten
          können. Um ein <strong>triviales Beispiel</strong> zu nehmen, wer von
          uns unterzieht sich je anstrengender körperlicher Betätigung, außer um
          Vorteile daraus zu ziehen? Aber <a href="#">link</a> wer hat irgend
          ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine
          Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der
          Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich
          zieht?
        </p>
      </Drawer>
      <Button onClick={() => setState(!state)}>show drawer</Button>
      <br></br>
      <h1>Auch gibt es niemanden, der den Schmerz an sich liebt.</h1>
      <p>
        Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
        wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
        Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können.
        Um ein <strong>triviales Beispiel</strong> zu nehmen, wer von uns
        unterzieht sich je anstrengender körperlicher Betätigung, außer um
        Vorteile daraus zu ziehen? Aber <a href="#">link</a> wer hat irgend ein
        Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine
        Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der
        Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich
        zieht?
      </p>
      <h1>Auch gibt es niemanden, der den Schmerz an sich liebt.</h1>
      <h2>Um ein triviales Beispiel zu nehmen.</h2>
      <p>
        Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
        wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
        Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können.{' '}
      </p>
      <h2>Um ein triviales Beispiel zu nehmen.</h2>
      <p>
        Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
        wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
        Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können.{' '}
      </p>
      <ul>
        <li>Um ein triviales Beispiel zu nehmen.</li>
        <li>Aber wer hat irgend ein Recht, einen Menschen zu tadeln.</li>
        <li>Der den Schmerz an sich liebt.</li>
      </ul>
      <p>
        Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
        wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
        Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können.{' '}
      </p>
      <ul>
        <li>Um ein triviales Beispiel zu nehmen.</li>
        <li>Aber wer hat irgend ein Recht, einen Menschen zu tadeln.</li>
        <li>Der den Schmerz an sich liebt.</li>
      </ul>
      <p>
        Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
        wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
        Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können.{' '}
      </p>
      <ul>
        <li>Um ein triviales Beispiel zu nehmen.</li>
        <li>Aber wer hat irgend ein Recht, einen Menschen zu tadeln.</li>
        <li>Der den Schmerz an sich liebt.</li>
      </ul>
      <p>
        Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
        wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
        Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können.{' '}
      </p>
      <ul>
        <li>Um ein triviales Beispiel zu nehmen.</li>
        <li>Aber wer hat irgend ein Recht, einen Menschen zu tadeln.</li>
        <li>Der den Schmerz an sich liebt.</li>
      </ul>
      <p>
        Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
        wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
        Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können.{' '}
      </p>
      <ul>
        <li>Um ein triviales Beispiel zu nehmen.</li>
        <li>Aber wer hat irgend ein Recht, einen Menschen zu tadeln.</li>
        <li>Der den Schmerz an sich liebt.</li>
      </ul>
      <p>
        Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
        wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
        Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können.{' '}
      </p>
      <ul>
        <li>Um ein triviales Beispiel zu nehmen.</li>
        <li>Aber wer hat irgend ein Recht, einen Menschen zu tadeln.</li>
        <li>Der den Schmerz an sich liebt.</li>
      </ul>
      <p>
        Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
        wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
        Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können.{' '}
      </p>
      <ul>
        <li>Um ein triviales Beispiel zu nehmen.</li>
        <li>Aber wer hat irgend ein Recht, einen Menschen zu tadeln.</li>
        <li>Der den Schmerz an sich liebt.</li>
      </ul>
      <p>
        Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder
        wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen
        Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können.{' '}
      </p>
    </Unik>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  size: '30%',
  closeOnBackdrop: true,
  closeIcon: 'right',
  position: 'left'
}
