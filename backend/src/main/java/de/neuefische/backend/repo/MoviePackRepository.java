package de.neuefische.backend.repo;

import de.neuefische.backend.model.MoviePack;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MoviePackRepository extends MongoRepository<MoviePack, String> {
}
