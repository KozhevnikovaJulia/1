import React, {useState,  useEffect} from "react";
import {Meta}  from '@storybook/react/types-6-0';
import HW12 from "../h12/HW12";
import {ProviderDecorator} from "../../stories/decorators/ProviderDecorator";

export default {
  title: 'HW12', 
  component: HW12,
  decorators: [ProviderDecorator]
} as Meta;

export const HW12Example = () => <HW12 />