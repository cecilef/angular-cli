import { TestBed, inject } from '@angular/core/testing';

import { MenuButtonService } from './menu-button.service';

describe('MenuButtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuButtonService]
    });
  });

  it('should be created', inject([MenuButtonService], (service: MenuButtonService) => {
    expect(service).toBeTruthy();
  }));
});
