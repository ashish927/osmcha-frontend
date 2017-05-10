// @flow
import React from 'react';
import {Map} from 'immutable';
import {Reasons} from '../reasons';
const Feature = ({data}) => (
  <div
    className="flex-parent flex-parent--row justify--space-between px42 flex-parent--wrap"
  >
    <span className="wmin120">ID: {data.get('osm_id')}</span>
    <span className="wmin240">Name: {data.get('name')}</span>
    <span className="wmin240"><Reasons reasons={data.get('reasons')} /></span>

  </div>
);
export function Features(
  {
    properties,
    changesetId,
  }: {properties: Map<string, *>, changesetId: number, expanded?: boolean},
) {
  const features = properties.get('features');
  return (
    <div className="p12">
      <div>
        <h2 className="txt-l mr6">Suspicious Features ({features.size})</h2>
        <p className="flex-child txt-subhead my3 txt-em ml6">
          {features.map((f, k) => <Feature key={k} data={f} />)}
        </p>
      </div>
    </div>
  );
}
