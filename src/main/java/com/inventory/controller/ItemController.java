package com.inventory.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.inventory.dto.Item;
import com.inventory.service.ItemServiceImp;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ItemController {
	
	@Autowired
	private ItemServiceImp service;

	private static final String UPLOAD_DIR = "src/main/resources/static/images";

	//	add item to the List
	@PostMapping("/items")
	public Item addItem(@RequestParam("file") MultipartFile file,
						@RequestParam("name") String name,
						@RequestParam("description") String description) {
		// Save the file and get the URL
		String fileName = saveFile(file);
		String fullImageUrl= "http://localhost:8080/images/"+fileName;

		// Create the item entity with the received data
		Item item = new Item();
		item.setName(name);
		item.setDescription(description);
		item.setImageUrl(fullImageUrl);

		// Save the item entity
		return service.addItem(item);
	}

	private String saveFile(MultipartFile file) {
		String fileName = generateFileName(file.getOriginalFilename());
		try {
			Path filePath = Paths.get(UPLOAD_DIR + "/" + fileName);
			Files.write(filePath, file.getBytes());
			return fileName; // Return the URL of the saved file
		} catch (IOException e) {
			System.out.println(e.toString());
			return null;
		}
	}

	private String generateFileName(String originalFileName) {
		String[] parts = originalFileName.split("\\.");
		String extension = parts[parts.length - 1];
		return UUID.randomUUID().toString() + "." + extension;
	}
	
//	Get all the items from the list
	@GetMapping("/items")
	public List<Item> getAllItems(){
		List<Item> items = service.getAllItems();
		System.out.println("path here------>"+items.get(0).getImageUrl());
		return items;
	}
	
//	Get item by its name
	@GetMapping("/items/{name}")
	public List<Item> getItemByName(@PathVariable("name") String name){
		return service.getItemByName(name);
	}
	
//	update item
	@PutMapping("/items/{id}")
	public Item updateItem (@RequestBody Item item, @PathVariable int id) {
		return service.updateItem(item, id);
	}
}