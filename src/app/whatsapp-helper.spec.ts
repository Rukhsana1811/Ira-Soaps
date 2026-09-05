import { TestBed } from '@angular/core/testing';
import { WhatsappHelper } from './whatsapp-helper';

describe('WhatsappHelper', () => {
  let service: WhatsappHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatsappHelper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('creates a kit enquiry link', () => {
    expect(service.kitEnquiryLink('Soap kit')).toContain(encodeURIComponent('Soap kit'));
  });
});
