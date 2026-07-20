"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Upload, X, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function ImageUploader({
  images,
  onChange,
}: {
  images: string[];
  onChange: (images: string[]) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setError(null);
    setUploading(true);

    const supabase = createClient();
    const uploaded: string[] = [];

    for (const file of Array.from(files)) {
      const ext = file.name.split(".").pop();
      const path = `${crypto.randomUUID()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(path, file);

      if (uploadError) {
        setError(`Failed to upload ${file.name}: ${uploadError.message}`);
        continue;
      }

      const { data } = supabase.storage.from("product-images").getPublicUrl(path);
      uploaded.push(data.publicUrl);
    }

    onChange([...images, ...uploaded]);
    setUploading(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  const removeImage = (url: string) => {
    onChange(images.filter((img) => img !== url));
  };

  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-3">
        {images.map((url) => (
          <div
            key={url}
            className="relative aspect-square rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 group"
          >
            <Image src={url} alt="" fill className="object-cover" sizes="150px" />
            <button
              type="button"
              onClick={() => removeImage(url)}
              className="absolute top-1 right-1 w-6 h-6 rounded-full bg-zinc-950/70 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="aspect-square rounded-lg border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex flex-col items-center justify-center gap-1.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-150 disabled:opacity-50"
        >
          {uploading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Upload className="w-5 h-5" />
              <span className="text-xs">Add photo</span>
            </>
          )}
        </button>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
      <p className="text-xs text-zinc-500">
        First photo shown becomes the cover image. You can add more anytime.
      </p>
    </div>
  );
}