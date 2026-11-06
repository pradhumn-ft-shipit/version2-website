import { describe, it, expect } from 'vitest';
import { ctaTargetForTopic, DEFAULT_CTA_TARGET } from './ctaTarget';

describe('ctaTargetForTopic', () => {
  it('maps transition/repapering posts to the advisor-transitions page', () => {
    expect(ctaTargetForTopic('Advisor Transitions & Repapering').href).toBe(
      '/solutions/advisor-transitions',
    );
    // accepts the category id form too
    expect(ctaTargetForTopic('advisor-transitions-and-repapering').href).toBe(
      '/solutions/advisor-transitions',
    );
  });

  it('sends document and notetaking posts to the default (module pages retired, PR1-06)', () => {
    expect(ctaTargetForTopic('Document Processing & Back-Office')).toEqual(DEFAULT_CTA_TARGET);
    expect(ctaTargetForTopic('Client Communication & Notetaking')).toEqual(DEFAULT_CTA_TARGET);
  });

  it('falls back to the advisor-transitions default for null / unknown topics', () => {
    expect(ctaTargetForTopic(null)).toEqual(DEFAULT_CTA_TARGET);
    expect(ctaTargetForTopic(undefined)).toEqual(DEFAULT_CTA_TARGET);
    expect(ctaTargetForTopic('some topic we do not map')).toEqual(DEFAULT_CTA_TARGET);
    expect(DEFAULT_CTA_TARGET.href).toBe('/solutions/advisor-transitions');
  });

  it('every target carries non-empty anchor text', () => {
    for (const topic of [
      'Advisor Transitions & Repapering',
      'Document Processing & Back-Office',
      'Client Communication & Notetaking',
      null,
    ]) {
      expect(ctaTargetForTopic(topic).label.length).toBeGreaterThan(0);
    }
  });
});
