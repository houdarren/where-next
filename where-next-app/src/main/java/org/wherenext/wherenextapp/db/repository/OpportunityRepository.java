package org.wherenext.wherenextapp.db.repository;

import org.springframework.data.repository.CrudRepository;
import org.wherenext.wherenextapp.db.model.Opportunity;

public interface OpportunityRepository extends CrudRepository<Opportunity, Integer> {
}
